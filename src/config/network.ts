interface NetworkConfig {
  urlFilletProgram: string
}

const config: NetworkConfig = {
  urlFilletProgram: process.env.OPTIMUS_API_URL + '/instructions'
};

export default config;
