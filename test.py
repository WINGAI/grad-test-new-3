schema = {
  "info": {
    "title": "Relevance AI Tools",
    "version": "latest"
  },
  "paths": {
    "/studios/93066935-6761-4174-8f1f-5bf2567b1ef2/trigger_llm_friendly": {
      "post": {
        "operationId": "Fetch_stock_quote_data_by_stock_ticker",
        "summary": "Fetch Stock Quote Data By Stock Ticker",
        "description": "Fetch  Stock quote data by ticker eg:\"AAPL\"",
        "security": [
          {
            "AuthorizationHeader": []
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/93066935-6761-4174-8f1f-5bf2567b1ef2RequestBodySchema"
              }
            }
          },
          "required": True
        },
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    }
  },
  "openapi": "3.0.0",
  "servers": [
    {
      "url": "https://api-f1db6c.stack.tryrelevance.com/latest"
    }
  ],
  "components": {
    "schemas": {
      "93066935-6761-4174-8f1f-5bf2567b1ef2RequestBodySchema": {
        "properties": {
          "ticker": {
            "type": "string",
            "frontend_metadata": {
              "required": True
            },
            "order": 0,
            "title": "Stock Ticker",
            "description": "Tickerof the stock to fetch data for eg: AAPL"
          }
        },
        "required": [
          "ticker"
        ],
        "type": "object"
      }
    },
    "securitySchemes": {
      "AuthorizationHeader": {
        "type": "apiKey",
        "in": "header",
        "name": "Authorization",
        "description": "Authorization credentials. Header authorization should be in the form of: project:api_key"
      }
    }
  },
  "security": [
    {
      "AuthorizationHeader": [
        "Authorization"
      ]
    }
  ]
}

print('Schema: ', schema.keys())
for key in schema.keys():
    print(' ============================= ')
    print('  ')
    print('  ')
    print(f'Schema[{key}]: ', schema[key])
    print('  ')
    print('  ')
    print(' ============================= ')
    if key == 'paths':
        for k, v in schema[key].items():
            print(' ============================= ')
            print('  ')
            print('  ')
            print(f'data[{k}]: ', v)
            print('  ')
            print('  ')
            print(' ============================= ')
            