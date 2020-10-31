import { FunctionComponent } from "react";

interface Props {
  name: string;
}

const Preview: FunctionComponent<Props> = ({ name }) => {
  return (
    <table id="signature" cellPadding="0" cellSpacing="0" className="font-sans">
      <tbody>
        <tr>
          <td width="100%">
            <table width="500" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td width="120">
                    <img
                      src="/logo.png"
                      title="Verumex"
                      alt="Verumex logo"
                      width="120"
                      height="120"
                    />
                  </td>
                  <td
                    width="379"
                    className="text-primary"
                    style={{
                      paddingLeft: 12,
                      paddingTop: 14,
                      paddingBottom: 10,
                      paddingRight: 10,
                    }}
                  >
                    <span
                      className="text-primary"
                      style={{
                        fontSize: 24,
                        lineHeight: "20px",
                      }}
                    >
                      {name}
                    </span>
                    <br />

                    <span style={{ fontStyle: "normal" }}>M: +47 47 88 21 21</span>
                    <br />
                    <span style={{ fontStyle: "normal" }}>E: nbl@verumex.com</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Preview;
