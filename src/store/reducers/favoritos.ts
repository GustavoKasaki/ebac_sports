import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const estaFavoritado = state.favoritos.find((p) => p.id === produto.id)

      if (estaFavoritado) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { toggle } = favoritosSlice.actions
export default favoritosSlice.reducer
