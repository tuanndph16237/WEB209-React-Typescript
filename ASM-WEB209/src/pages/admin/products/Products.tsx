import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, Space, Image } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  SearchOutlined,
  PlusOutlined,
  FormOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { getAll, remove } from "../../../api/product";
import { ProductType } from "../../../types/product";
import { CategoryType } from "../../../types/categories";
import { list } from "../../../api/categories";

type ManagerProductProps = {
  data: ProductType[];
  onRemove: (id: number) => void;
};

const handleChangeRouter = (el: any) => {
  console.log("element: ", el);
};

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const ProductAdminPage = () => {
  const [cate, setCate] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCate = async () => {
      const { data } = await list();
      setCate(data);
    };
    getCate();
  }, []);
  const columns: ColumnsType<ProductType> = [
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (dataIndex) => (
        <Image src={dataIndex} style={{ width: "50px" }} />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    // {
    //   title: "Đặc điểm",
    //   dataIndex: "feature",
    //   key: "feature",
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "Giá khuyến mãi",
      dataIndex: "saleOffPrice",
      key: "saleOffPrice",
    },
    // {
    //   title: "Mô tả ngắn",
    //   dataIndex: "shortDesc",
    //   key: "shortDesc",
    // },
    {
      title: "Danh mục",
      dataIndex: "categories",
      key: "categories",
      render: (text: any) => {
        let name;
        cate.map((item) => {
          if(item.id == text){
            name = item.name;
          }
        })
        return <span>{name}</span>
      }
    },
    {
      title: "Ẩn/Hiện",
      key: "hidden",
      render: (el, record) => (
        <Space size="middle">
          <Switch unCheckedChildren onClick={onChange} />
        </Space>
      ),
    },
    {
      title: "Chi tiết",
      key: "action",
      dataIndex: "id",
      render: (dataIndex) => {
        return (
          <Space size="middle">
            <IconsItems>
              <Link to={`/admin/product/detail/${dataIndex}`}>
                <PlusCircleOutlined  />
              </Link>
            </IconsItems>
          </Space>
        );
      },
    },
    {
      title: "Sửa",
      key: "action",
      dataIndex: "id",
      render: (dataIndex) => {
        return (
          <Space size="middle">
            <IconsItems>
              <Link to={`/admin/product/edit/${dataIndex}`}>
                <FormOutlined />
              </Link>
            </IconsItems>
          </Space>
        );
      },
    },
    {
      title: "Xóa",
      key: "hidden",
      dataIndex: "id",
      render: (text: number) => (
        <Space size="middle">
          <Button
            onClick={async () => {
              const confirm = window.confirm("bạn có chắc muốn xóa");
              if (confirm) {
                const { data } = await remove(text);
                data &&
                  setDataTable(dataTable.filter((item) => item.id !== text));

                console.log(text);
              }
            }}
          >
            <IconsItems2>
              <DeleteOutlined />
            </IconsItems2>
          </Button>
        </Space>
      ),
    },
  ];
  const [dataTable, setDataTable] = useState([]);
  console.log("dataTable", dataTable);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setDataTable(data.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>

        <Link to="/admin/product/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>

      <Table columns={columns} dataSource={dataTable} />
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const IconsItems = styled.div`
  color: #00b0d7;
`;
const IconsItems2 = styled.div`
  color: #00b0d7;
`;

export default ProductAdminPage;