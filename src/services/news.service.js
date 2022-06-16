import {axiosNewsService} from './axios.service';

export const newsService = {
    getAdmin: () => axiosNewsService.get('/').then((value => value.data)),
    getAll: () => axiosNewsService.get('/news').then(value => value.data),
    createNews: (news) => axiosNewsService.post('/news', news),
    getSite: () => axiosNewsService.get('/news/admin').then(value => value.data[0]),
    updateSite: (id, site) => axiosNewsService.put(`/news/admin/${id}`, site),
}
