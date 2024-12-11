import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IArticle } from '../../types/article';

interface ArticlesState {
  articles: IArticle[];
  currentArticle: IArticle | null;
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
}

const initialState: ArticlesState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null,
  totalPages: 1,
  currentPage: 1,
};

// Helper pour inclure le token JWT dans les requêtes
const getAuthHeaders = (token: string | null) => {
  return token
    ? { headers: { Authorization: `Bearer ${token}` } }
    : {};
};

// Thunks
export const fetchArticles = createAsyncThunk(
  'articles/fetchAll',
  async (
    params: { page?: number; limit?: number; category?: string; search?: string } = {},
    { rejectWithValue, getState }
  ) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.get('/api/articles', {
        params,
        ...getAuthHeaders(token),
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la récupération des articles');
    }
  }
);

export const fetchArticleById = createAsyncThunk(
  'articles/fetchOne',
  async (id: string, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.get(`/api/articles/${id}`, getAuthHeaders(token));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la récupération de l\'article');
    }
  }
);

export const createArticle = createAsyncThunk(
  'articles/create',
  async (articleData: Partial<IArticle>, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.post('/api/articles', articleData, getAuthHeaders(token));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la création de l\'article');
    }
  }
);

export const updateArticle = createAsyncThunk(
  'articles/update',
  async ({ id, data }: { id: string; data: Partial<IArticle> }, { rejectWithValue, getState }) => {
    try {
      const token = (getState() as any).auth.token; // Récupération du token depuis le store
      const response = await axios.put(`/api/articles/${id}`, data, getAuthHeaders(token));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Erreur lors de la mise à jour de l\'article');
    }
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearCurrentArticle: (state) => {
      state.currentArticle = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Articles
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Single Article
      .addCase(fetchArticleById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentArticle = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Create Article
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = [...state.articles, action.payload];
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update Article
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.articles.findIndex(article => article.id === action.payload.id);
        if (index !== -1) {
          state.articles[index] = action.payload;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCurrentArticle, clearError } = articleSlice.actions;
export default articleSlice.reducer;
