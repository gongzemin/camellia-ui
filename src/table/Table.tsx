import { defineComponent } from "vue";

export default defineComponent({
  name: "TableComponent",
  props: {
    data: {
      type: Array as () => Array<{ [key: string]: any }>,
      required: true,
    },
  },

  // return renderTable
  setup(props) {
    return () => (
      <div>
        <table>
          <thead>
            <tr>
              {Object.keys(props.data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, key) => (
                  <td key={key}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
});
