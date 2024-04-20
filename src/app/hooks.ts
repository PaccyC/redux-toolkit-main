import { TypedUseSelectorHook, useDispatch, useSelector,UseSelector  } from 'react-redux'

import { AppDispatch, RootState  } from './store'
export const useAppDispatch = ()=> useDispatch< AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
