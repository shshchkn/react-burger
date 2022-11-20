import React from "react";
import {store} from "../store";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type TModal = {
  readonly children: React.ReactNode,
  readonly onClose: () => void,
  readonly headerTitle: string
}

export type TIngredient = {
  readonly _id: string,
  readonly price: number,
  readonly image: string,
  readonly image_large: string,
  readonly image_mobile: string,
  readonly name: string,
  readonly calories: number,
  readonly proteins: number,
  readonly fat: number,
  readonly carbohydrates: number,
  readonly type: string,
}

export type TIngredientDetails = {
  details?: TIngredient
}

export type TIngredientSingle = TIngredient & {
  readonly dragId: number,
  index: number
}

export type TIngredientProps = {
  item: TIngredientSingle,
  index: number,
  moveCard: (dragIndex: number, hoverIndex: number) => void
}

export type TIngredientsTypes = {
  readonly title: string,
  readonly type: string,
  readonly data: TIngredient[],
}

export type TModalOverlay = {
  onClose: () => void,
}

export type TOrderDetails = {
  readonly orderNumber: number
}

export type TSetCookieOptions = {
  [name: string]: string | number
}

export type TUser = {
  readonly name?: string,
  readonly email?: string
}

export type TProfileUser = {
  readonly name: {
    value: string,
    disabled: boolean
  },
  readonly email: {
    value: string,
    disabled: boolean
  },
  readonly password: {
    value: string,
    disabled: boolean
  }
}