import React from "react";
import {store} from "../store";
import type * as CSS from 'csstype';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export type TModal = {
  readonly children: React.ReactNode,
  readonly onClose: () => void,
  readonly headerTitle?: string,

  readonly extraStyle?: CSS.Properties
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
  readonly qty?: number
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

export type TInputNames = 'password' | 'email' | 'token' | 'name'

export type TUseForm<T extends string> = {
  [key in T]?: string
}

export type TWs = {
  wsConnected: boolean,
  feed: TWsOrder[] | null,
  orders: TWsOrder[] | null,
  total: number | null,
  totalToday: number | null,
  error: string | null,
};

export type TOwner = {
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type TWsOrder = {
  createdAt: string,
  ingredients: string[],
  name: string,
  number: number,
  owner?: TOwner,
  price?: number,
  status: string,
  updatedAt: string,
  _id: string,
};

export type TWsResponse = {
  success: boolean;
  orders: TWsOrder[];
  total: number;
  totalToday: number;
};

export type TOrder = {
  data: TOrderIngredient;
  total: number;
}

export type TOrderIngredient = {
  [key: string]: {
    id: string
    name: string,
    image: string,
    price: number,
    amount: number,
  }
}

export type TOrderProduct = {
  name: string;
  image_mobile: string;
  price: number;
};