import { Injectable } from '@angular/core';
import { Action , State, StateContext,Selector } from '@ngxs/store';
import { AddReference,DelReference } from '../action/panier.action';
import { PanierStateModel } from './panier-state-model';

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    panier : []
  } 
   
})
@Injectable()
export class PanierState {

    @Selector () 
    static getNbReference (state:PanierStateModel) {
        return state.panier.length;
    }

    @Action (AddReference)
        add(
            {getState, patchState } :  StateContext<PanierStateModel>, 
            { payload }: AddReference) {
            const state = getState();
            patchState({panier : [...state.panier, payload]});
    }

    @Action (DelReference)
    del(
            {getState, patchState } :  StateContext<PanierStateModel>, 
            { payload }: DelReference) {
              const state = getState();
              let index = state.panier.findIndex(x => x.reference == payload.reference);
              state.panier.splice(index);
              patchState({ panier: state.panier });
    }

}