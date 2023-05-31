#include "DHT.h"
#define dht_type DHT11
int dht_pin = A1;
const int LM35 = A0;
DHT dht_1 = DHT(dht_pin, dht_type);

void setup(){
  Serial.begin(9600);
  dht_1.begin();
}

void loop(){
  float umidade = dht_1.readHumidity();
  float temperatura = (float(analogRead(LM35)) * 5 / 1023) / 0.01; 
  if (isnan (temperatura)or isnan (umidade)){
    Serial.println ("ERRO ao ler o valor do sensor");
  }
    else{
      Serial.print("Umidade: ");
      Serial.print(umidade);
      Serial.print(" %");
      Serial.print(", ");
      Serial.print("Temperatura: ");
      Serial.print(temperatura);
      Serial.println(" °C");
      }
      delay(500);
}
