import {
  GET_ALL_CITIES,
  ADD_SUPPLIER,
  UPDATE_SUPPLIER,
  DELETE_SUPPLIER
} from "@/queries/supplierQueries";
import { defaultClient as apolloClient } from "@/main";

const api = {
  getAllCities: () => {
    return apolloClient.query({
      query: GET_ALL_CITIES
    });
  },
  addSupplier: payload => {
    return apolloClient.mutate({ mutation: ADD_SUPPLIER, variables: payload });
  },
  editSupplier: payload => {
    return apolloClient.mutate({
      mutation: UPDATE_SUPPLIER,
      variables: payload
    });
  },
  deleteSupplier: payload => {
    console.log(payload);
    return apolloClient.mutate({
      mutation: DELETE_SUPPLIER,
      variables: payload
    });
  }
};

export default api;
