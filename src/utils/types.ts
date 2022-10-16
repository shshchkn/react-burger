import React from "react";

export type TModal = {
  children: React.ReactNode,
  show: boolean,
  onClose?: () => void,
  headerTitle: string
}

export type TIngredientDetails = {
  type?: object,
  _id?: string,
  price?: number,
  image_large?: string,
  image_mobile?: string,
  name?: string,
  calories?: number,
  proteins?: number,
  fat?: number,
  carbohydrates?: number,
}

export type TIngredient = {
  _id: string,
  price: number,
  image_large: string,
  image_mobile: string,
  name: string,
  calories: number,
  proteins: number,
  fat: number,
  carbohydrates: number,
}