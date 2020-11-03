import { CSSProperties, FunctionComponent } from "react";

interface Props {
  name: string;
  email: string;
  phone: string;
}

const fontSans =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const primaryColor = "#0c2340";
const textGrayColor = "#979797";
const dataLineTextStyles: CSSProperties = {
  fontFamily: fontSans,
  fontSize: 11,
  margin: 0,
  lineHeight: "14px",
};
const dataLineSubheadingStyles = (paddingRight: number): CSSProperties => ({
  color: `${primaryColor} !important`,
  paddingRight,
  fontSize: 12,
  fontWeight: 600,
});

const Preview: FunctionComponent<Props> = ({ name, phone, email }) => {
  return (
    <table id="signature" cellPadding="0" cellSpacing="0" role="presentation" width="550">
      <tbody>
        <tr>
          <td>
            <table cellPadding="0" cellSpacing="0" role="presentation">
              <tbody>
                <tr>
                  <td valign="middle">
                    <table cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody>
                        <tr>
                          <td style={{ paddingRight: 10 }}>
                            <img
                              width="75"
                              height="75"
                              src="/logo.png"
                              alt="Verumex logo"
                              style={{
                                width: 75,
                                borderRadius: 0,
                                border: "none",
                                maxWidth: "none",
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td valign="middle" width="100%">
                    <table cellPadding="0" cellSpacing="0" role="presentation">
                      <tbody>
                        <tr style={{ fontWeight: 600 }}>
                          <td valign="middle">
                            <p
                              style={{
                                fontFamily: fontSans,
                                fontSize: 13,
                                color: `${primaryColor} !important`,
                                lineHeight: "16px",
                                margin: 0,
                                marginBottom: 4,
                              }}
                            >
                              {name}
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="middle">
                            <p style={dataLineTextStyles}>
                              <span style={dataLineSubheadingStyles(4)}>M:</span>
                              <span
                                style={{ color: textGrayColor, textDecoration: "none !important" }}
                              >
                                {phone}
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="middle">
                            <p style={dataLineTextStyles}>
                              <span style={dataLineSubheadingStyles(10)}>E:</span>
                              <a
                                href={`mailto:${email}`}
                                style={{ color: textGrayColor, textDecoration: "none !important" }}
                              >
                                {email}
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
