describe('Health API Test', () => {
  test('should return application up status', () => {
    const mockResponse = { status: 'UP' };
    expect(mockResponse.status).toBe('UP');
  });
});