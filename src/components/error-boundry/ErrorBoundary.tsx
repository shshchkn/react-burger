import {Component} from "react";
import {InfoIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./error-boundry.module.scss";

class ErrorBoundary extends Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error: boolean) {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error("Возникла ошибка!", error, info);
  }

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <section className={styles.error}>
          <span className={`${styles.error__icon} mb-4`}>
            <InfoIcon type="primary" />
          </span>
          <h1 className={`${styles.error__title} text text_type_main-medium mb-4`}>Что-то пошло не так :(</h1>
          <p className={`${styles.error__text} text text_type_main-default text_color_inactive`}>
            В приложении произошла ошибка. <br/>Пожалуйста, перезагрузите страницу.
          </p>
        </section>
      );
    }
    // @ts-ignore
    return this.props.children;
  }
}

export default ErrorBoundary;