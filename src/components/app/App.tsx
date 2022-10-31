import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path={`/ingredients/:id`} element={<IngredientPage />} />
                <Route element={<NotFoundPage />} />
              </Routes>
            </div>
          </main>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
