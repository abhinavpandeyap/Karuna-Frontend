import axios from 'axios';

const API_URL = 'http://localhost:8080/donor';

class DonorService {
  registerDonor(donor) {
    return axios.post(`${API_URL}/register`, donor);
  }

  viewCampaigns() {
    return axios.get(`${API_URL}/campaigns`);
  }

  deleteDonor(donorId) {
    return axios.delete(`${API_URL}/${donorId}`);
  }

  updateDonor(donor, donorId) {
    return axios.put(`${API_URL}/${donorId}`, donor);
  }

  donateItem(item, donorId) {
    return axios.post(`${API_URL}/donate/donor/${donorId}`, item);
  }

  login(dto) {
    return axios.post(`${API_URL}/login`, dto);
  }

  viewReceivers() {
    return axios.get(`${API_URL}/receivers`);
  }

  viewHistory(donorId) {
    return axios.get(`${API_URL}/history/${donorId}`);
  }

  logout(donorId) {
    return axios.post(`${API_URL}/logout/${donorId}`);
  }

  donateToReceiver(userId, receiverId, item) {
    return axios.post(`${API_URL}/donate/receiver/${receiverId}/donor/${userId}`, item);
  }

  donateToCampaign(campaignId, donorId, item) {
    return axios.post(`${API_URL}/donate/campaign/${campaignId}/donor/${donorId}`, item);
  }
}

export default new DonorService();
