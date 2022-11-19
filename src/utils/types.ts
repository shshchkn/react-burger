import React from "react";

export type TModal = {
  children: React.ReactNode,
  onClose?: () => void,
  headerTitle: string
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
  type: string,
  dragId: number,
  index: number
}