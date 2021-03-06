import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('Testing Routes of the APP', (): void => {
  it('Endpoint: /api/processimg?name=fjord', async (): Promise<void> => {
    const response = await request.get('/api/processimg?name=fjord');
    expect(response.status).toBe(200);
  });
  it('Endpoint: /api/processimg?name=fjord&width=500&height=500', async (): Promise<void> => {
    const response = await request.get(
      '/api/processimg?name=fjord&width=500&height=500'
    );
    expect(response.status).toBe(200);
  });

  it('Endpoint: /api/processimg?name=fjord&width=200&height=200', async (): Promise<void> => {
    const response = await request.get(
      '/api/processimg?name=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('Endpoint: /invalidEndpoint', async (): Promise<void> => {
    const response = await request.get('/invalidEndpoint');
    expect(response.status).toBe(404);
  });
});
