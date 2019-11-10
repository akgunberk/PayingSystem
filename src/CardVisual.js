import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
class Visual extends Component {
  render() {
    const number =
      this.props.CardNumber !== undefined && this.props.CardNumber.length === 16
        ? this.props.CardNumber.match(/.{1,4}/g).join(" \xa0")
        : this.props.CardNumber;

    const name = this.props.CardName;
    //const secur =
    // this.props.Security === undefined ? null : this.props.Security.security;
    const month =
      this.props.Security === undefined
        ? null
        : this.props.Security.month + " /";
    const year =
      this.props.Security === undefined ? null : this.props.Security.year;

    const visa =
      this.props.CardName !== undefined && this.props.CardName[0] === 4 ? (
        <Icon name={"cc visa"} />
      ) : null;

    const master = (
      <Icon
        name={"cc mastercard"}
        size={"large"}
        style={{
          position: "absolute",
          float: "right",
          right: "80px",
          top: "35px"
        }}
      />
    );
    return (
      <div>
        <div style={{ padding: "25px" }} className="CardVisual">
          <div className="box">
            {master}
            <p
              style={{
                fontSize: "18px"
              }}
            >
              {number}
              <p
                style={{
                  marginTop: "5px",
                  marginLeft: "27px",
                  textAlign: "left",
                  fontSize: "16px"
                }}
              >
                {name}
              </p>
            </p>
            <p
              style={{
                position: "absolute",
                right: "97px",
                top: "150px"
              }}
            >
              {month} {year}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    CardNumber: state.CardNumber,
    CardName: state.CardName,
    Security: state.CardSecurity
  };
};

export default connect(mapStateToProps)(Visual);
