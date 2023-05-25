import axios, { AxiosResponse } from 'axios'

export const generateErrorMessage = (
	response: AxiosResponse<unknown, unknown>
) => {
	return JSON.stringify(response)
}

export const getHeaders = (token: string) => {
	const auth = token && { Authorization: `Bearer ${token}` }

	return {
		'Access-Control-Allow-Origin': '*',
		...auth,
	}
}

export const fetchApiResponse = async <TData, TResponse>(
	method: string,
	endpoint: string,
	parameters?: Object,
	data?: TData,
	token = ''
): Promise<TResponse> => {
	const config = {
		method: method,
		url: `http://localhost:3000/api/${endpoint}`,
		headers: getHeaders(token),
		parameters,
		data,
	}

	const response = await axios.request(config)

	if (response.status >= 200 && response.status < 300) {
		return response.data
	}

	const error = new Error(generateErrorMessage(response))
	throw error
}

export const getApiResponse = async <TData, TResponse>(
	endpoint: string,
	parameters?: Object,
	data?: TData,
	token = ''
): Promise<TResponse> => {
	const config = {
		url: `http://localhost:3000/api/${endpoint}`,
		headers: getHeaders(token),
		parameters,
		data,
	}

	const response = await axios.get(url)

	if (response.status >= 200 && response.status < 300) {
		return response.data
	}

	const error = new Error(generateErrorMessage(response))
	throw error
}
