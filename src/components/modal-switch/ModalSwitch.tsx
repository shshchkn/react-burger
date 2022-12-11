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
  NotFoundPage,
  FeedPage, FeedOrderPage
} from "../../pages";
import Modal from "../modal/Modal";
import {useDispatch} from "react-redux";
import {REMOVE_INGREDIENT_DETAILS} from "../../services/actions/ingredientDetails";
import IngredientDetails from "../ingredient-details/IngredientDetails";
import ProtectedRoute from "../../hocs/protected-route/ProtectedRoute";
import ProfileForm from "../profile/profile-form/ProfileForm";
import ProfileOrders from "../profile/profile-orders/ProfileOrders";
import {AppDispatch} from "../../services/types";

const ModalSwitch = () => {
  const dispatch: AppDispatch = useDispatch();
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

        <Route element={<ProtectedRoute anonymous={true} />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route element={<ProtectedRoute anonymous={false} />}>
          <Route path="profile/*" element={<ProfilePage />}>
            <Route index element={<ProfileForm />} />
            <Route path="orders" element={<ProfileOrders />} />
          </Route>
        </Route>

        <Route path="feed" element={<FeedPage />} />
        <Route path="feed/:id" element={<FeedOrderPage />} />
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
          <Route path="feed/:id" element={
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