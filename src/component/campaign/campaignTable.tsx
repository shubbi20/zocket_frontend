import { Space, Switch, Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table";
import { useState } from "react";
import { TrashLogo } from "../../Logos/trashLogo";
import { EditLogo } from "../../Logos/editLogo";
import "../../styles/bottomSection.scss";
import { Filter } from "./filter";

interface DataType {
  key: React.Key;
  campaign: string;
  daterange: string;
  clicks: number;
  budget: number;
  location: string;
  tags: string[];
}
const handleChnage = () => {
  console.log("I am here");
};

const columns: ColumnsType<DataType> = [
  {
    title: "On/Off",
    align: "right",
    width: "3%",

    render: (text, record, index) => {
      return <Switch size="small" onChange={() => handleChnage()} />;
    },
  },
  {
    title: "Campaign",
    dataIndex: "campaign",
  },
  {
    title: "Date Range",
    dataIndex: "daterange",
  },
  {
    title: "Clicks",
    dataIndex: "clicks",
  },
  {
    title: "Budget",
    dataIndex: "budget",
  },
  {
    title: "Location",
    dataIndex: "location",
  },
  {
    title: "Status",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length < 7 ? "yellow" : "green";
          if (tag === "Exhausted") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
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

const data: DataType[] = [];
for (let i = 0; i < 9; i++) {
  data.push({
    key: i,
    campaign: `Edward King${i}`,
    daterange: `06Oct2022-2${i}oct2022`,
    clicks: 200,
    budget: 5000,
    location: "delhi",
    tags: ["Live Now"],
  });
}

export const CamapaignsTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState<string | undefined>(undefined);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

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

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div
      style={{
        backgroundColor: "#fafafa",

        borderRadius: "10px",
        margin: "2rem",
      }}
    >
      {/* <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div> */}
      <Filter />
      <Table
        // className="ant-table-thead "
        style={{
          padding: "1rem",
          height: "50vh",
          overflowY: "auto",
          // overflowX: "auto",
        }}
        size="small"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
        scroll={{ x: 800 }}
      />
    </div>
  );
};
