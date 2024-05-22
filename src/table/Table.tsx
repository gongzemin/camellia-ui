import { defineComponent, PropType } from "vue";
import { css } from "@emotion/css";

// Define types for columns and data source
interface Column {
  title: string;
  dataIndex: string;
  key: string;
}

interface DataSourceItem {
  key: string;
  [key: string]: any;
}

const tableContainerStyle = css`
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
`;

const tableHeaderStyle = (bgColor: string) => css`
  background-color: ${bgColor || "#fafafa"};
  color: rgba(0, 0, 0, 0, 8);
`;

const tableRowStyle = css`
  &:nth-of-type(even) {
    // background-color: #f2f2f2;
  }
`;

const tableCellStyle = css`
  border: 1px solid #ddd;
  padding: 8px;
`;

const tableHeaderCellStyle = css`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
`;

export default defineComponent({
  name: "Table",
  props: {
    dataSource: {
      type: Array as PropType<DataSourceItem[]>,
      required: true,
    },
    columns: {
      type: Array as PropType<Column[]>,
      required: true,
    },
    headerBgColor: {
      type: String,
      default: "#fafafa", // Default background color for the header
    },
  },

  setup(props) {
    return () => (
      <div class={tableContainerStyle}>
        <table class={tableStyle}>
          <thead class={tableHeaderStyle(props.headerBgColor)}>
            <tr class={tableRowStyle}>
              {props.columns.map((column) => (
                <th key={column.key} class={tableHeaderCellStyle}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.dataSource.map((item) => (
              <tr key={item.key} class={tableRowStyle}>
                {props.columns.map((column) => (
                  <td key={column.key} class={tableCellStyle}>
                    {item[column.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
});
