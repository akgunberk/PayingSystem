import React from "react";
import ReactDOM from "react-dom";
import { Button, Card, CardContent, Grid, GridColumn } from "semantic-ui-react";
import CardNumber from "./CardNumber";
import CardName from "./CardName";
import DateSecurity from "./DateSecurity";
import Visual from "./CardVisual";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./styles.css";

function reducer(state, action) {
  if (state === undefined) {
    return NaN;
  }
  switch (action.type) {
    case "NUMBER":
      return {
        ...state,
        CardNumber: action.number
      };
    case "NAME":
      return {
        ...state,
        CardName: action.name
      };
    case "SECURITY":
      return {
        ...state,
        CardSecurity: action.security
      };

    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: "NUMBER" });
store.dispatch({ type: "NAME" });
store.dispatch({ type: "SECURITY" });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Paying System via Credit Card</h2>

        <div style={{ marginLeft: "25px" }} className="Cards">
          <Card
            style={{ paddingLeft: "25px", border: "none" }}
            className="Card-Info"
            fluid
          >
            <Grid columns={2} divided={"vertically"}>
              <GridColumn verticalAlign={"middle"}>
                <CardContent style={{ paddingBottom: "20px" }}>
                  <div>
                    <CardNumber />
                  </div>
                </CardContent>

                <CardContent style={{ paddingBottom: "20px" }}>
                  <div>
                    <CardName />
                  </div>
                </CardContent>

                <CardContent
                  className="Date-Code"
                  style={{ paddingBottom: "20px" }}
                >
                  <div className="Descr">
                    <span>Son Kullanma Tarihi</span>
                    <span>Güvenlik Kodu</span>
                    <br />
                  </div>

                  <div className="Date-inputs">
                    <DateSecurity />
                  </div>
                </CardContent>
              </GridColumn>

              <GridColumn
                textAlign="center"
                verticalAlign={"middle"}
                className="visual"
              >
                <Visual />
              </GridColumn>
            </Grid>
          </Card>
        </div>
        <br />
        <Button color={"orange"} onClick={() => document.location.reload(true)}>
          {/*This button can be used to send retrieved info to
         the database to check for verification */}
          Submit
        </Button>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
