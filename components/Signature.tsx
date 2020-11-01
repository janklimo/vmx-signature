import { FunctionComponent } from "react";

interface Props {
  name: string;
  email: string;
  phone: string;
}

const fontSans =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
const primaryColor = "#0c2340";
const textGrayColor = "#979797";

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
                              width="100"
                              height="100"
                              src="/logo.png"
                              alt="Verumex logo"
                              style={{
                                width: 100,
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
                                fontSize: 18,
                                lineHeight: "20px",
                                margin: 0,
                                marginBottom: 5,
                              }}
                            >
                              <span
                                style={{
                                  color: `${primaryColor} !important`,
                                }}
                              >
                                {name}
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="middle">
                            <p
                              style={{
                                fontFamily: fontSans,
                                fontSize: 12,
                                margin: 0,
                                lineHeight: "15px",
                              }}
                            >
                              <span
                                style={{
                                  color: `${primaryColor} !important`,
                                  paddingRight: 4,
                                  fontSize: 13,
                                  fontWeight: 600,
                                }}
                              >
                                M:
                              </span>
                              <span style={{ color: textGrayColor, textDecoration: "none" }}>
                                {phone}
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="middle">
                            <p
                              style={{
                                fontFamily: fontSans,
                                fontSize: 12,
                                margin: 0,
                                lineHeight: "15px",
                              }}
                            >
                              <span
                                style={{
                                  color: `${primaryColor} !important`,
                                  paddingRight: 10,
                                  fontSize: 13,
                                  fontWeight: 600,
                                }}
                              >
                                E:
                              </span>
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
