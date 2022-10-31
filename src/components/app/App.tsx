import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ErrorBoundary from '../error-boundry/ErrorBoundary';
import AppHeader from '../app-header/AppHeader';
import styles from './app.module.scss';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  IngredientPage,
  NotFoundPage
} from "../../pages";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <ErrorBoundary>
        <Router>
          <AppHeader/>
          <main className={styles.main}>
            <div className="container">
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/login" exact>
                  <LoginPage />
                </Route>
                <Route path="/register" exact>
                  <RegisterPage />
                </Route>
                <Route path="/forgot-password" exact>
                  <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password" exact>
                  <ResetPasswordPage />
                </Route>
                <Route path="/profile" exact>
                  <ProfilePage />
                </Route>
                <Route path="/ingredients/:id" exact>
                  <IngredientPage />
                </Route>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
            </div>
          </main>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
