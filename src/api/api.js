import {
  GET_ALL_CITIES,
  ADD_SUPPLIER,
  UPDATE_SUPPLIER,
  DELETE_SUPPLIER,
  FILTER_SUPPLIERS,
} from '@/queries/supplierQueries';
import { defaultClient as apolloClient } from '@/main';

//vidi da sredis ova ponavljanja gde se prosledjuju samo razliciti nazivi fja i payload da bude jedna dinamicka fja npr.
const api = {
  getAllCities: () => {
    return apolloClient.query({
      query: GET_ALL_CITIES,
    });
  },
  addSupplier: payload => {
    return apolloClient.mutate({ mutation: ADD_SUPPLIER, variables: payload });
  },
  editSupplier: payload => {
    return apolloClient.mutate({
      mutation: UPDATE_SUPPLIER,
      variables: payload,
    });
  },
  deleteSupplier: payload => {
    return apolloClient.mutate({
      mutation: DELETE_SUPPLIER,
      variables: payload,
    });
  },
  filterSuppliers: payload => {
    return apolloClient.query({
      query: FILTER_SUPPLIERS,
      variables: { filter: payload },
    });
  },
};

export default api;
