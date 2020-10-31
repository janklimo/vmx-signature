const Preview = () => {
  return (
    <table
      id="signature"
      cellPadding="0"
      cellSpacing="0"
      style={{ fontSize: "12px", fontFamily: "Arial", lineHeight: "17px" }}
    >
      <tbody>
        <tr>
          <td width="100%">
            <table width="600" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td width="120">
                    <img
                      src="/logo.png"
                      title="mclogo"
                      alt="Merced_College"
                      width="120"
                      height="120"
                    />
                  </td>
                  <td
                    width="479"
                    style={{
                      color: "#001d51",
                      paddingLeft: 20,
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingRight: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#c8932b",
                        fontSize: 25,
                        fontFamily: "Constantia, Lucida Bright, ejaVu Serif, Georgia, serif",
                        lineHeight: "20px",
                      }}
                    >
                      Your Name
                    </span>
                    <br />

                    <span style={{ fontStyle: "italic" }}>Your position info here</span>
                    <br />
                    <span style={{ fontStyle: "normal" }}>3600 M Street, Merced CA 95348</span>
                    <br />
                    <span style={{ fontStyle: "normal" }}>
                      (209) 384-xxxx |{" "}
                      <a
                        style={{ textDecoration: "none", color: "#001d51" }}
                        href="http://www.mccd.edu"
                      >
                        www.mccd.edu
                      </a>
                    </span>
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
