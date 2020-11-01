import { FunctionComponent } from "react";

interface Props {
  name: string;
  email: string;
  phone: string;
}

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
                              }}
                              className="max-w-none"
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
                            <p style={{ fontSize: 18, margin: 0 }} className="font-sans">
                              <span className="text-primary">{name}</span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="middle">
                            <p style={{ fontSize: 12, margin: 0 }} className="font-sans">
                              <span
                                style={{ paddingRight: 0, fontSize: 13, fontWeight: 600 }}
                                className="text-primary inline-block w-5"
                              >
                                M:
                              </span>
                              <span style={{ color: "#979797", textDecoration: "none" }}>
                                {phone}
                              </span>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td valign="middle">
                            <p style={{ fontSize: 12, margin: 0 }} className="font-sans">
                              <span
                                style={{ paddingRight: 0, fontSize: 13, fontWeight: 600 }}
                                className="text-primary inline-block w-5"
                              >
                                E:
                              </span>
                              <a
                                href={`mailto:${email}`}
                                style={{ color: "#979797", textDecoration: "none !important" }}
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
