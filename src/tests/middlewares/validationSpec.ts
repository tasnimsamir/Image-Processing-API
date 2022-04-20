import supertest from 'supertest';
import app from '../..';

const request = supertest(app);

describe('Testing Validations of the APP', (): void => {
  it('Endpoint: /api/processimg', async (): Promise<void> => {
    const response = await request.get('/api/processimg');
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! You should enter filename');
  });
  it('Endpoint: /api/processimg?name=fjord&width=200', async (): Promise<void> => {
    const response = await request.get('/api/processimg?name=fjord&width=200');
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! You should enter required height');
  });

  it('Endpoint: /api/processimg?name=fjord&height=200', async (): Promise<void> => {
    const response = await request.get('/api/processimg?name=fjord&height=200');
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! You should enter required width');
  });

  it("Endpoint: /api/processimg?name=fjord&width='200'&height=210", async (): Promise<void> => {
    const response = await request.get(
      "/api/processimg?name=fjord&width='200'&height=210"
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! width should be Number');
  });

  it("Endpoint: /api/processimg?name=fjord&width=200&height='210'", async (): Promise<void> => {
    const response = await request.get(
      "/api/processimg?name=fjord&width=200&height='210'"
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! height should be Number');
  });

  it('Endpoint: /api/processimg?name=fjord&width=-200&height=210', async (): Promise<void> => {
    const response = await request.get(
      '/api/processimg?name=fjord&width=-200&height=210'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! width should be positive number');
  });

  it('Endpoint: /api/processimg?name=fjord&width=200&height=-210', async (): Promise<void> => {
    const response = await request.get(
      '/api/processimg?name=fjord&width=200&height=-210'
    );
    expect(response.status).toBe(400);
    expect(response.text).toBe('ERROR!!! height should be positive number');
  });
});
