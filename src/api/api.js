import { defaultClient as apolloClient } from '@/main';
import {
  ADD_SUPPLIER,
  DELETE_SUPPLIER,
  FILTER_SUPPLIERS,
  GET_ALL_CITIES,
  UPDATE_SUPPLIER,
} from '@/queries/supplierQueries';

import {
  CREATE_ORDER,
  GET_ALL_ORDERS,
  GET_LAST_REQUISITION,
  GET_REQUISITION_ITEMS_PER_SUPPLIER,
  GET_SUPPLIERS_FROM_LAST_REQUISITION,
} from '../queries/orderQueries';

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
  getSuppliersFromLastRequisition: () => {
    return apolloClient.query({
      query: GET_SUPPLIERS_FROM_LAST_REQUISITION,
    });
  },
  getLastRequisition: () => {
    return apolloClient.query({
      query: GET_LAST_REQUISITION,
    });
  },
  getRequisitionItemsPerSupplier: payload => {
    return apolloClient.query({
      query: GET_REQUISITION_ITEMS_PER_SUPPLIER,
      variables: payload,
    });
  },
  createOrder: payload => {
    return apolloClient.mutate({
      mutation: CREATE_ORDER,
      variables: payload,
    });
  },
  getAllOrders: () => {
    return apolloClient.query({
      query: GET_ALL_ORDERS,
    });
  },
};

export default api;
