import React, { useEffect, useState } from "react";
import "./App.css";
import { createTheme, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Card,
  CardContent,
  Container,
  Icon,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
  Snackbar,
  Tooltip,
  responsiveFontSizes,
} from "@material-ui/core";
import Expenses from "./components/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";
import FallbackUI from "./components/misc/FallbackUI";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Alert from "@material-ui/lab/Alert";
import Footer from "./components/Footer";

const fnUseStyles = makeStyles({
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
  themeSwitchColour: {
    color: "white",
  },
  customCard: {
    borderTop: 0,
    borderRadius: "0 0 3px 3px",
  },
});

const App = () => {
  const classes = fnUseStyles();
  const [expenses, setExpenses] = useState([]);
  const [isDarkMode, setisDarkMode] = useState(false);

  localStorage.setItem("ET_dateFilter", "all");

  // Snackbar state and functions
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const fnShowSnackbar = () => {
    setIsSnackbarOpen(true);
  };
  const fnHideSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  // Dark mode system preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // App theme
  let theme = createTheme({
    palette: {
      type: prefersDarkMode || isDarkMode ? "dark" : "light",
    },
  });
  theme = responsiveFontSizes(theme);

  // Function to toggle App theme mode - dark or light
  const fnChangeThemeMode = () => {
    setisDarkMode((prevState) => !prevState);
  };

  // Adds data in the expense state and displays snackbar
  const fnAddExpense = (newExpenseData) => {
    setExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
    fnShowSnackbar();
  };

  // Store component JSX in variable to use later
  const expensesUI =
    expenses.length === 0 ? (
      <FallbackUI message="Add an expense to list it here." type="info" />
    ) : (
      <Expenses expenses={expenses} />
    );

  // Get from localStorage
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("ET_expenses"));
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
  }, []);

  // Store in localStorage
  useEffect(() => {
    const json = JSON.stringify(expenses);
    localStorage.setItem("ET_expenses", json);
  }, [expenses]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <AppBar position="static" role="heading" elevation={0}>
          <Toolbar className={classes.nav}>
            <Typography variant="h5" component="h1">
              Expense Tracker
            </Typography>
            <Tooltip title={`Toggle ${!isDarkMode ? "dark" : "light"} mode`}>
              <IconButton
                aria-label="toggle dark or light mode"
                onClick={fnChangeThemeMode}
                className={classes.themeSwitchColour}
              >
                <Icon>{isDarkMode ? "light_mode" : "dark_mode"}</Icon>
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Card
          variant="outlined"
          role="main"
          border={isDarkMode ? 0 : 1}
          padding={1}
          className={classes.customCard}
          style={{ borderColor: isDarkMode ? "#424242" : "#ccc" }}
        >
          <CardContent>
            <AddExpense onAddExpense={fnAddExpense} />
            {expensesUI}
          </CardContent>
        </Card>
        <Snackbar
          open={isSnackbarOpen}
          onClose={fnHideSnackbar}
          message="New expense added."
        >
          <Alert onClose={fnHideSnackbar} severity="success">
            New expense added.
          </Alert>
        </Snackbar>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
