import socketIO from 'socket.io';
import http from 'http';

interface WebSocketConfig {
    url : string;
    options? : {
        headers? :Record<string, string>;
        query?: Record<string, string>;
    };
    events?: {
        connect?: (ws: WebSocket) => void;
        message?: (data: string | Buffer) => void;
        error?: (error: Error) => void;
        close?: () => void;
    };
}

const config: WebSocketConfig = {
    url: 'ws://localhost:8080',
  options: {
    headers: {
      'Authorization': 'Bearer your_token'
    }
  },
  events: {
    message: (data) => {
      // Xử lý dữ liệu nhận được
      console.log('Received message:', data);
    }
  }
};
export default config;
