import {post, get, download, del, put} from './apicore'

import {
  ADMIN_LOGIN_URL,
  ADMIN_URL,
  ROLE_URL,
  ORDER_URL,
  CART_URL,
  PRODUCT_URL,
  CUSTOMER_URL,
  CONSULTANT_URL,
  REFRESH_URL,
  SUBSCRIPTION_URL,
  COMPENSATION_URL,
  FLIGHT_STAGING_TOKEN,
  DASHBOARD_URL,
} from './url'

export async function adminLogin({email, password}) {
  return post(ADMIN_LOGIN_URL, null, {
    email,
    password,
  })
}

export async function adminSignup({email, password, username}) {
  return post(`${ADMIN_URL}/`, null, {
    email,
    password,
    username,
  })
}

// User Management
// -----------------admin--------------
export async function createNewAdmin({data, token}) {
  return post(`${ADMIN_URL}/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getAdmins(token) {
  return get(`${ADMIN_URL}/`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getAdminById(adminId, token) {
  return get(`${ADMIN_URL}/${adminId}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function delAdminById(adminId, token) {
  return del(`${ADMIN_URL}/${adminId}`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function editAdmin({data, token, adminId}) {
  return put(`${ADMIN_URL}/${adminId}`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

// -----------------role--------------

export async function getRoles(token) {
  return get(`${ROLE_URL}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getUsersByRoleId(id, token) {
  return get(`${ROLE_URL}/${id}/users`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function delUserByRoleId(roleId, userId, token) {
  return del(`${ROLE_URL}/${roleId}/users/${userId}`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -----------------order--------------

export async function searchOrder({query, token}) {
  return post(`${ORDER_URL}/search`, null, query, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getOrderDetials({id, token}) {
  return get(`${ORDER_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function orderPayment(orderId, data, token) {
  return post(`${ORDER_URL}/${orderId}/payments`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

// --------------------cart-----------------

export async function createCart(token) {
  return get(`${CART_URL}/guestuser`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function addCartItem(cartId, data, token) {
  return post(`${CART_URL}/${cartId}/items`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function cartCheckout({cartId, data, token}) {
  return post(`${CART_URL}/${cartId}/checkout`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCartDetails(id, token) {
  return get(`${CART_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -------------------customer-----------------

export async function customerSignup(data) {
  return post(`${CUSTOMER_URL}/signup`, null, data)
}

export async function createCustomerAddress({customerID, data, token}) {
  return post(`${CUSTOMER_URL}/${customerID}/addresses/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function searchCustomers({data, token}) {
  return post(`${CUSTOMER_URL}/search`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCustomerDetails({id, token}) {
  return get(`${CUSTOMER_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -----------------consultant-----------------

export async function createNewConsultant({data}) {
  return post(`${CONSULTANT_URL}/signup`, null, data)
}

export async function createConsultantAddress({consultantId, data, token}) {
  return post(`${CONSULTANT_URL}/${consultantId}/addresses/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function searchConsultants({data, token}) {
  return post(`${CONSULTANT_URL}/search`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getConsultantDetails({id, token}) {
  return get(`${CONSULTANT_URL}/${id}`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// -------------------token refresh------------------
export async function refreshToken({token}) {
  return post(REFRESH_URL, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

//----------------------product-----------------
export async function getAllProducts(token) {
  return get(`${PRODUCT_URL}/`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductTaxCodes({token}) {
  return get(`${PRODUCT_URL}/taxcodes/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductJoinOptions({token}) {
  return get(`${PRODUCT_URL}/joinoptions/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductClassifications({token}) {
  return get(`${PRODUCT_URL}/classifications/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getMemberships({token}) {
  return get(`${SUBSCRIPTION_URL}/memberships/`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function createProduct({data, token}) {
  return post(`${PRODUCT_URL}/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getProductDetails({id, token}) {
  return get(`${PRODUCT_URL}/${id}`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function searchProducts({data, token}) {
  return post(`${PRODUCT_URL}/search`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCompensationRuns({param, token}) {
  return get(`${COMPENSATION_URL}/Compensation/GetCompensationRuns`, param, {
    Authorization: `Bearer ${token}`,
  })
}

export async function flightAdminLogin({token}) {
  return get(`${FLIGHT_STAGING_TOKEN}/api/flightadmin/login`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function isCompensationPlanDoc(token) {
  return get(`${COMPENSATION_URL}/Compensation/CompensationPlanDocumentAvailable`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getCompensationPlanDoc({param, token}) {
  return download(`${COMPENSATION_URL}/api/Export/CompensationPlanDocument`, param, {
    Authorization: `Bearer ${token}`,
  })
}

export async function getDashboardReports(token) {
  // const param = {start_date: '2020-07-06', end_date: '2020-08-06'}
  return get(`${DASHBOARD_URL}/dashboard`, null, {
    Authorization: `Bearer ${token}`,
  })
}

// ---------------product-type api----------------------
export async function getProductTypes({token}) {
  return get(`${PRODUCT_URL}/types/`, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function deleteProductType({id, token}) {
  return del(`${PRODUCT_URL}/types/${id}`, null, null, {
    Authorization: `Bearer ${token}`,
  })
}

export async function createProductType({data, token}) {
  return post(`${PRODUCT_URL}/types/`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}

export async function updateProductType({id, data, token}) {
  return put(`${PRODUCT_URL}/types/${id}`, null, data, {
    Authorization: `Bearer ${token}`,
  })
}
