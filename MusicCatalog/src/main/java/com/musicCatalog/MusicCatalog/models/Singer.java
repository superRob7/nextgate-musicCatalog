package com.musicCatalog.MusicCatalog.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "singers")
public class Singer {

	@Id
	@Column(name = "singer_id")
	private long id;

	@Column(name = "record_type")
	private final String recordType = "SINGER";

	@Column(name = "name")
	private String name;

	@Column(name = "dob")
	private String dob;

	@Column(name = "sex")
	private String sex;

	@Column(name = "company")
	private String company;

	public Singer() {

	}

	public Singer(Long id, String name, String dob, String sex, String comany) {
		this.id = id;
		this.name = name;
		this.dob = dob;
		this.sex = sex;
		this.company = comany;
	}

	/** Getters **/

	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRecordType() {
		return recordType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

}
