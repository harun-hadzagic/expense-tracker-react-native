import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../ui/Button";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({ cancleHandler, isEditing, onSubmit, defaultValues }) => {
  const [inputs, setInputs] = useState({
    amount: {isValid: true, value: defaultValues ? defaultValues.amount.toString() : ""},
    date: {isValid: true, value: defaultValues ? getFormattedDate(defaultValues.date) : ""},
    description: {isValid: true, value: defaultValues ? defaultValues.description : ""},
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputs((currentInputValues) => {
      return { ...currentInputValues, [inputIdentifier]: {value: enteredValue, isValid: true} };
    });
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
        // Alert.alert("Invalid input", 'Please ckeck your inputs')
        
        setInputs((currentInputs)=>{
            return {
                amount: {value: currentInputs.amount.value, isValid: amountIsValid},
                date: {value: currentInputs.date.value, isValid: dateIsValid},
                description: {value: currentInputs.description.value, isValid: descriptionIsValid},
            }
        })

        return;
    }
    onSubmit(expenseData);

  };

  const forimIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          value: inputs.description.value,
          onChangeText: inputChangedHandler.bind(this, "description"),
        }}
      />
      {forimIsInvalid && <Text>Please scheck your input</Text>}
      <View style={styles.buttonContainer}>
        <Button style={styles.button} mode="flat" onPress={cancleHandler}>
          Cancle
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
