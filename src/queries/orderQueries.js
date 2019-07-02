import { gql } from 'apollo-boost';

// Supplier queries
export const GET_SUPPLIERS_FROM_LAST_REQUISITION = gql`
  query {
    getSuppliersFromLastRequisition {
      taxIdNum
      name
      address
      city {
        name
        areaCode
      }
    }
  }
`;

export const GET_REQUISITION_ITEMS_PER_SUPPLIER = gql`
  query($requisitionId: Int, $supplierId: String) {
    getRequisitionItemsPerSupplier(requisitionId: $requisitionId, supplierId: $supplierId) {
      requisitionId
      itemSerialNumber
      orderedQuantity
      totalQuantity
      product {
        name
        id
        supplierPrice
      }
    }
  }
`;

export const GET_LAST_REQUISITION = gql`
  query {
    getLastRequisition {
      id
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation($order: Order) {
    createOrder(order: $order)
  }
`;

export const EDIT_ORDER = gql`
  mutation($order: Order) {
    editOrder(order: $order)
  }
`;

export const GET_ALL_ORDERS = gql`
  query {
    getAllOrders {
      id
      dateCreated
      supplier {
        name
      }
    }
  }
`;

export const GET_ORDER = gql`
  query($orderId: Int) {
    getOrder(orderId: $orderId) {
      id
      dateCreated
      employee {
        name
        surname
      }
      supplier {
        taxIdNum
        name
      }
      orderItems {
        orderId
        serialNumber
        requisitionId
        itemSerialNumber
        supplierId
        orderedQuantity
        totalQuantity
        product {
          name
          supplierPrice
        }
      }
    }
  }
`;
