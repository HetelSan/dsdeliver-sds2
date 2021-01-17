import axios from "axios";

// const API_URL = 'http://192.168.0.11:8080';
const API_URL = 'https://sds2-hetelsan.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
    return axios(`${API_URL}/orders/${orderId}/delivered`);
}