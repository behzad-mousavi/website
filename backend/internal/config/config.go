package config

import "os"

type Config struct {
	Port string
	Env  string
	WebURL string
}

func Load() Config {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	env := os.Getenv("APP_ENV")
	if env == "" {
		env = "development"
	}
	webURL := os.Getenv("WEB_URL")
	if webURL == "" {
		webURL = "http://localhost:3000"
	}
	return Config{Port: port, Env: env, WebURL: webURL}
}
