import { message, Space, Spin, Switch, Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useState } from "react";
import { TrashLogo } from "../../Logos/trashLogo";
import { EditLogo } from "../../Logos/editLogo";
import "../../styles/bottomSection.scss";
import { Filter } from "./filter";
import { CampaignInterface, UserSession } from "./utils/interface";
import { getCampaignApi } from "../../apiUtil/campaignApi";
import moment from "moment";
import {
  FacebookOutlined,
  GoogleOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { CampaignTableDiv } from "./utils/campaignTableSection";

interface DataType {
  key: React.Key;
  isOn: boolean;
  campaign: string;
  daterange: string;
  clicks: number;
  budget: number;
  location: string;
  tags: string[];
  platform: string;
}

export const CamapaignsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string | undefined>(undefined);
  const [tableData, setTableData] = useState<DataType[]>([]);
  const [userSession, setUserSession] = useState<UserSession | string>("");
  const [value, setValue] = useState<boolean>(false);
  const toggle = (checked: boolean) => {
    setLoading(checked);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "On/Off",
      dataIndex: "isOn",
      align: "left",
      width: "2%",

      render: (record: boolean) => {
        return (
          <Switch
            checked={record}
            size="small"
            onChange={(e) => setValue(!value)}
          />
        );
      },
    },
    {
      title: "Campaign",
      dataIndex: "campaign",
      render: (record: string) => {
        return <CampaignTableDiv campaignName={record} createdOn={"20 june"} />;
      },
    },

    {
      title: "Date Range",
      dataIndex: "daterange",
      align: "center",
      width: "19%",
    },
    {
      title: "Clicks",
      dataIndex: "clicks",
      width: "4%",
      align: "center",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      align: "center",
      width: "6%",
    },
    {
      title: "Location",
      dataIndex: "location",
      align: "center",
      width: "8%",
    },
    {
      title: "platform",
      dataIndex: "platform",
      key: "platform",
      width: "1%",
      align: "center",
      render: (record: string) => {
        if (record === "Google") {
          return <GoogleOutlined />;
        } else if (record === "FB") {
          return <FacebookOutlined />;
        } else if (record === "Youtube") {
          return <YoutubeOutlined />;
        } else {
          return <InstagramOutlined />;
        }
      },
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      width: "10%",
      align: "center",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length < 7 ? "yellow" : "green";
            if (tag === "Exhausted") {
              color = "volcano";
            } else if (tag === "Live-Now") {
              color = "green";
            } else if (tag === "Paused") {
              color = "yellow";
            } else {
              color = "grey";
            }
            return (
              <Tag
                color={color}
                key={tag}
                style={{ borderRadius: "10px", width: 80 }}
              >
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      render: () => (
        <Space size="middle">
          {/* <a>Delete</a> */}
          <TrashLogo />
          <a>
            <Space>
              <EditLogo />
              {/* <EditOutlined /> */}
            </Space>
          </a>
        </Space>
      ),
    },
  ];

  const fetchUserData = async ({
    token,
    query,
  }: {
    token: string;
    query?: string;
  }) => {
    const [data, error] = await getCampaignApi(token, query);
    if (data) {
      console.log("data", data);
      setTimeout(() => {
        setLoading(false);
        fillTable(data.Data);
      }, 1000);
    } else {
      setLoading(false);
      console.log(error);
      message.error(error);
    }
  };

  const createQuery = async ({
    platform,
    tags,
    day,
  }: {
    platform?: string;
    tags?: string;
    day?: string;
  }) => {
    let query = "?";
    if (platform && platform !== "All Platform") {
      query = query + `platform=${platform}&`;
    }

    if (tags && tags !== "All Status") {
      query = query + `tags=${tags}&`;
    }

    if (day && day !== "All") {
      if (day === "Last 30 days") {
        query = query + "day=30&";
      }
      if (day === "Last 60 days") {
        query = query + "day=60&";
      }
    }
    setLoading(true);
    fetchUserData({ token: (userSession as UserSession).token, query });
  };

  const fillTable = (dataTable: CampaignInterface[]) => {
    const data: DataType[] = [];
    dataTable.map((ele) => {
      data.push({
        key: ele._id,
        isOn: ele.isOn,
        campaign: `${ele.campaignName}`,
        daterange: `${moment(ele.startDate).format("MMM Do YYYY")}-${moment(
          ele.endDate
        ).format("MMM Do YYYY")}`,
        clicks: ele.clicks,
        budget: ele.budget,
        location: ele.location,
        tags: [ele.tagValue],
        platform: ele.platform,
      });
    });

    setTableData(data);
  };

  useEffect(() => {
    const session: UserSession = JSON.parse(
      localStorage.getItem("zocketSessionData") || "s"
    );
    setUserSession(session);
    setLoading(true);
    fetchUserData({ token: session.token, query: "?day=30" });
  }, []);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record: DataType) => ({
      disabled: true,
    }),
  };

  const scroll: { x?: number | string; y?: number | string } = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = "100vw";
  }

  return (
    <Spin spinning={loading}>
      <div
        style={{
          backgroundColor: "#fafafa",
          borderRadius: "10px",
          margin: "2rem",
        }}
      >
        <Filter createQuery={createQuery} toggle={toggle} />
        <Table
          style={{
            padding: "1rem",
            height: "50vh",
            overflowY: "auto",
          }}
          size="small"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={tableData}
          pagination={false}
          bordered={true}
          scroll={{ x: 800 }}
        />
      </div>
    </Spin>
  );
};
