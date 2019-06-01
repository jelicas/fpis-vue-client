import { gql } from "apollo-boost";

// Supplier queries
export const GET_ALL_CITIES = gql`
  query {
    getCities {
      areaCode
      name
    }
  }
`;

export const GET_ALL_SUPPLIERS = gql`
  query {
    getSuppliers {
      taxIdNum
      name
      address
      city {
        areaCode
        name
      }
      regNum
    }
  }
`;

export const GET_SUPPLIER = gql`
  query($taxIdNum: String) {
    getSupplier(taxIdNum: $taxIdNum) {
      taxIdNum
      name
      address
      city {
        areaCode
        name
      }
      regNum
    }
  }
`;

export const FILTER_SUPPLIERS = gql`
  query($filter: SupplierFilterParameter) {
    filterSuppliers(filter: $filter) {
      taxIdNum
      name
      address
      city {
        areaCode
        name
      }
      regNum
    }
  }
`;

// Supplier mutations
export const ADD_SUPPLIER = gql`
  mutation(
    $taxIdNum: String
    $regNum: String
    $name: String
    $address: String
    $city: String
  ) {
    addSupplier(
      taxIdNum: $taxIdNum
      regNum: $regNum
      name: $name
      address: $address
      city: $city
    ) {
      taxIdNum
      name
      address
      city {
        areaCode
        name
      }
      regNum
    }
  }
`;

export const UPDATE_SUPPLIER = gql`
  mutation(
    $taxIdNum: String
    $regNum: String
    $name: String
    $address: String
    $city: String
  ) {
    updateSupplier(
      taxIdNum: $taxIdNum
      regNum: $regNum
      name: $name
      address: $address
      city: $city
    ) {
      taxIdNum
      name
      address
      city {
        areaCode
        name
      }
      regNum
    }
  }
`;

export const DELETE_SUPPLIER = gql`
  mutation($taxIdNum: String) {
    deleteSupplier(taxIdNum: $taxIdNum)
  }
`;
