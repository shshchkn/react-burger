import {
  Routes,
  Route,
  useLocation,
  useNavigate
} from "react-router-dom";
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
import Modal from "../modal/Modal";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT_DETAILS} from "../../services/actions/ingredientDetails";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import ProtectedRoute from "../../hocs/protected-route/ProtectedRoute";

const ModalSwitch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const handleModalClose = () => {
    dispatch({type: REMOVE_INGREDIENT_DETAILS});
    navigate(-1);
  };

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />

        <Route path="profile" element={(
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        )} />

        <Route path="ingredients/:id" element={<IngredientPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="ingredients/:id" element={
            <Modal headerTitle="Детали ингредиента" onClose={handleModalClose}>
              <IngredientDetails />
            </Modal>
          } />
        </Routes>
      )}
    </>
  );
}

export default ModalSwitch;