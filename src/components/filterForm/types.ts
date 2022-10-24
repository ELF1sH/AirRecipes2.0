import { ICuisineFilter } from '../../domain/entity/filter/ICuisineFilter';

export interface FilterFormControllerState {
  caloricFilter: number[],
  cuisinesFilter: ICuisineFilter[],
}

export type UpdateCaloricFilterPayload = number[];

export type UpdateCuisinesFilterPayload = ICuisineFilter[];

export interface UpdateFiltersPayload {
  caloricFilter: UpdateCaloricFilterPayload,
  cuisinesFilter: UpdateCuisinesFilterPayload,
}

export type PayloadType = UpdateFiltersPayload
  | UpdateCaloricFilterPayload
  | UpdateCuisinesFilterPayload;

export interface Action {
  type: ActionType,
  payload: PayloadType,
}

export interface ActionUpdateFilters extends Action {
  payload: UpdateFiltersPayload,
}

export interface ActionUpdateCaloricFilter extends Action {
  payload: UpdateCaloricFilterPayload,
}

export interface ActionUpdateCuisinesFilter extends Action {
  payload: UpdateCuisinesFilterPayload,
}

export enum ActionType {
  UPDATE_FILTERS = 'UPDATE_FILTERS',
  UPDATE_CALORIC_FILTER = 'UPDATE_CALORIC_FILTER',
  UPDATE_CUISINES_FILTER = 'UPDATE_CUISINES_FILTER',
}
