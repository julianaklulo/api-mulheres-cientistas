const apiUrl = 'http://127.0.0.1:8000/mulheres';

export const fetchDataFromApi = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

export const postDataToApi = async (formData) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error posting data to API:', error);
        throw error;
    }
}

export const deleteDataFromApi = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
    } catch (error) {
        console.error('Error deleting data from API:', error);
        throw error;
    }
}

export const putDataToApi = async (id, formData) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error putting data to API:', error);
        throw error;
    }
}
