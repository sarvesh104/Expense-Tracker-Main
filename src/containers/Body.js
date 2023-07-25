import React, { Component } from "react";
import "../styles/main.css";
import Card from "../common/Card";
import List from "../common/List";

class Body extends Component {
  constructor() {
    super();

    // 1st step
    this.state = {
      show: "list",

      expense: 0,
      budget: 10000,

      form: {
        expense_for: "",
        expense_amt: 0,
      },

      listOfExpenses: [],
    };
  }

  // 3rd step handling of btn
  handleShow = () => {
    const { show } = this.state;

    if (show === "form") {
      this.setState({ show: "list" });
    }

    if (show === "list") {
      this.setState({ show: "form" });
    }
  };

  handleAddExpense = () => {
    let { budget, expense, form, listOfExpenses } = this.state;
    const { expense_for, expense_amt } = form;

    

    //Expense & Budget
    if (expense_amt > 0) {
      expense += parseFloat(expense_amt);
      budget -= parseFloat(expense_amt);
    }

    // Update list
    const expenseFor = {
      expense_for,
      expense_amt,
    };

    listOfExpenses.push(expenseFor);

    this.setState({ budget, expense, listOfExpenses });
  };

  handleForm = (key, value) => {
    let form = this.state.form;
    form[key] = value;
    this.setState({
      form,
    });
  };

  render() {
    const { show, expense, budget, listOfExpenses } = this.state;

    return (
      <div>
        <div className="box">
          <h3>Stats</h3>

          <div>
            <Card title={"Expense"} amount={expense} />
            <Card title={"Budget"} amount={budget} />
          </div>
        </div>

        <div className="box">
          <div className="expense-header">
            <h3>{show === "list" ? "List Expenses" : "Add Expense"}</h3>
            <p className="expense-header-click" onClick={this.handleShow}>
              {show === "list" ? "Add" : "List"} Expense
            </p>
          </div>

          {/* 2nd step : rendering */}

          {/* List */}
          {show === "list"
            ? listOfExpenses.map((value, index) => {
              console.log(`${index}_List`)
                return (
                  <List
                    expense_for={value.expense_for}
                    expense_amt={value.expense_amt}
                    key={`${index}_List`}
                  />
                );
              })
            : null}

          {/* Form */}

          {show === "form" ? (
            <div className="add-expense">
              <div className="add-expense-inp">
                <label>Expense for</label>
                <input
                  onChange={(e) =>
                    this.handleForm("expense_for", e.target.value)
                  }
                />
              </div>
              <div className="add-expense-inp">
                <label>Amount</label>
                <input
                  onChange={(e) =>
                    this.handleForm("expense_amt", e.target.value)
                  }
                />
              </div>

              <button
                className="add-expense-btn"
                onClick={this.handleAddExpense}
              >
                Add Expense
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Body;
