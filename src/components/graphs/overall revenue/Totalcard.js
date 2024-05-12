import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Totalcard.css";
// import { RevenueContext } from "../../context/MyContext.js";

const Totalcard = ({ label, value }) => {
  const [data, setData] = useState(0);
  useEffect(() => {
    setData(localStorage.getItem("totalMSE"));
  }, []);
  // const { revenue } = useContext(RevenueContext);
  // console.log("revenue ", revenue);
  return (
    <div className="cardx">
      <Card className="card">
        <div className="CardContent">
          <CardContent>
            <div className="combinedrevenues">
              <div className="cardiv">
                <div>
                  <Typography variant="h7" gutterBottom>
                    {label}
                  </Typography>
                </div>
                <div className="cardivtwo">
                  <Typography variant="body3">{data}</Typography>
                </div>
              </div>
              <div className="cardiv cardivx">
                <div className="firstdivv">
                  <Typography variant="h7" gutterBottom>
                    {label}
                  </Typography>
                </div>
                <div className="cardivtwo">
                  <Typography variant="body3">{value}</Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Totalcard;
