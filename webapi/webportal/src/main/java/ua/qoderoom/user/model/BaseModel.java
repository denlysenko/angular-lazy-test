package ua.qoderoom.user.model;

import java.util.Calendar;

public class BaseModel {
	private String id;
	private Calendar createDate;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Calendar getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Calendar createDate) {
		this.createDate = createDate;
	}
}
