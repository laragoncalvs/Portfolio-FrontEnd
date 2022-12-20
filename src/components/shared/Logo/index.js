import img2 from "../../../assets/Group 43 (1).svg";
import img from "../../../assets/Group 44 (1).svg";
import * as React from "react";
import Collapse from "@mui/material/Collapse";

export default function Logo() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(true);
  };

  const handleChangeOut = () => {
    setChecked(false);
  };

  React.useEffect(() => {
    setTimeout(() => {

         setChecked(false)
        }, 1500
    )

  }, [])

  return (
    <a onMouseOver={handleChange} onMouseOut={handleChangeOut}>
      <div style={{ display: "flex", minWidth: "380px ", alignItems: 'flex-start' }}>
        <div>
          <Collapse orientation="horizontal" in={checked} collapsedSize={25}>
            <div>
              <img src={img} />
            </div>
          </Collapse>
        </div>
        <img src={img2} />
      </div>
    </a>
  );
}
