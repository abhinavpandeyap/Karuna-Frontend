import axios from 'axios';

const RECEIVER_BASE_URL = "http://localhost:8080/receiver";

class ReceiverService {
  registerReceiver(receiver) {
    return axios.post(RECEIVER_BASE_URL + "/register", receiver);
  }

  viewItems() {
    return axios.get(RECEIVER_BASE_URL + "/items");
  }

  deleteAccount(receiverId) {
    return axios.delete(RECEIVER_BASE_URL + `/${receiverId}`);
  }

  updateAccount(receiverId, updatedReceiver) {
    return axios.put(RECEIVER_BASE_URL + `/${receiverId}`, updatedReceiver);
  }

  loginReceiver(loginDTO) {
    return axios.post(RECEIVER_BASE_URL + "/login", loginDTO);
  }

  logoutReceiver(receiverId) {
    return axios.post(RECEIVER_BASE_URL + `/logout/${receiverId}`);
  }

  acceptItem(receiverId, itemId) {
    return axios.post(RECEIVER_BASE_URL + `/items/accept/${receiverId}/${itemId}`);
  }

  requestForItem(request) {
    return axios.post(RECEIVER_BASE_URL + "/items/request", request);
  }

  requestForDelivery(itemId, request) {
    return axios.post(RECEIVER_BASE_URL + `/delivery/request/${itemId}`, request);
  }

  makePayment(receiverId, payment) {
    return axios.post(RECEIVER_BASE_URL + `/payment/${receiverId}`, payment);
  }

  viewHistory(receiverId) {
    return axios.get(RECEIVER_BASE_URL + `/history/${receiverId}`);
  }

  viewLocationOfDonor(itemId) {
    return axios.get(RECEIVER_BASE_URL + `/donors/${itemId}/location`);
  }
}

export default new ReceiverService();
